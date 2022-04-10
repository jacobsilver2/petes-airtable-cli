import {Command} from '@oclif/core';
import * as inquirer from 'inquirer';
import moment from 'moment';
import {base} from '../utils/base';

const addEventQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Band Name:\n',
    },
    {
        type: 'input',
        name: 'date',
        message: 'Date:\n',
    },
    {
        type: 'input',
        name: 'time',
        message: 'Time:\n',
    },
    {
        type: 'list',
        name: 'status',
        choices: ['Confirmed', 'Held', 'Cancelled', 'Note', 'Private Event'],
    },
];

const addActPromptQuestion = [
    {
        type: 'list',
        name: 'response',
        choices: ['yes', 'no'],
    },
];

const addActQuestions = [
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email address for the act:\n',
    },
];

export default class Add extends Command {
    static description = 'add an act';

    createEvent(answers: {name: string; date: string; time: string; status: string}) {
        const {name, date, time, status} = answers;
        const formattedDate = moment.utc(`${date}, ${time}`, 'MMMD,YYYY, h:ma').format();
        base('Events').create(
            {
                Name: `${name}`,
                Status: `${status}`,
                Date: formattedDate,
            },
            (err, record) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(
                    `A new event has been created with the id ${record?.getId()}.\nDo you want to add an act?`
                );
                inquirer.prompt(addActPromptQuestion).then(answers => {
                    if (answers.response === 'yes') {
                        inquirer.prompt(addActQuestions).then(moreAnswers => {
                            this.checkIfActExistsAndAddToEvents(
                                moreAnswers.email,
                                record?.get('Name') as string,
                                record?.getId() as string
                            );
                        });
                    }
                    return;
                });
            }
        );
    }

    checkIfActExistsAndAddToEvents(email: string, name: string, eventId: string) {
        function addExistingActToEvent(eventId: string, actId: string) {
            base('Events').update(
                eventId,
                {
                    'Act (link)': [actId],
                },
                err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(`Successfully added act to event. Now fuck off.`);
                }
            );
        }

        base('Acts')
            .select({
                view: 'Grid',
                filterByFormula: `(AND({Email} = \"${email}\", {Name} = \"${name}\"))`,
            })
            .eachPage(
                (records, fetchNextPage) => {
                    if (records.length === 0) {
                        console.log(
                            'No act with that name and email was found in the database. Creating a new record\n'
                        );
                        this.createActandAddToEvent(eventId, name, email);
                        return;
                    }

                    records.forEach(function (record) {
                        addExistingActToEvent(eventId, record.id);
                    });
                    fetchNextPage();
                },
                err => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                }
            );
    }

    createActandAddToEvent(eventId: string, name: string, email: string) {
        base('Acts').create(
            {
                Name: name,
                Email: email,
                Events: [eventId],
            },
            err => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(
                    'Successfully created a new act, added it to the database, and linked to to the event.  Now fuck off'
                );
            }
        );
    }

    public async run(): Promise<void> {
        inquirer.prompt(addEventQuestions).then(answers => {
            this.createEvent(answers);
        });
    }
}
