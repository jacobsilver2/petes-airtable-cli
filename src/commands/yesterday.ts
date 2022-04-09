import {Command, Flags} from '@oclif/core';
import * as inquirer from 'inquirer';
import Airtable from 'airtable';
import {exec} from 'child_process';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({path: path.join(__dirname, '../../.env')});
const base = new Airtable({apiKey: process.env.API_KEY}).base('app4Eb0X39KtGToOS');

export default class Yesterday extends Command {
    static description =
        'list events from yesterday and add draw and notes, or email with mail flag';

    static flags = {
        mail: Flags.boolean({
            char: 'm',
            description: 'send email with notes',
            default: false,
        }),
    };

    static async getEventsYesterday() {
        const results = await base('Events')
            .select({
                view: 'Yesterday',
            })
            .all();
        return results.map(result => {
            return {
                id: result.id,
                name: result.fields.Name,
                time: result.fields[`Time (Formatted)`],
                email: result.fields[`Act Email`],
            };
        });
    }

    async askForReportAndDraw(id: string, name: string) {
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'report',
                    message: `Enter the report for ${name}`,
                },
                {
                    type: 'input',
                    name: 'draw',
                    message: `Enter the draw for ${name}`,
                },
            ])
            .then(answers => {
                this.updateEventBlurbAndDraw(id, answers.report, parseInt(answers.draw));
            });
    }

    async updateEventBlurbAndDraw(id: string, Report: string, Draw: number) {
        base('Events').update(
            id,
            {
                Report,
                Draw,
            },
            err => {
                if (err) {
                    console.error(err);
                    return;
                }
            }
        );
    }

    public async run(): Promise<void> {
        const {flags} = await this.parse(Yesterday);
        const results = await Yesterday.getEventsYesterday();
        const choices = results.map(result => result.name);
        if (choices.length > 0) {
            let answers = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'event',
                    message: 'Which event?',
                    choices,
                },
            ]);
            const choice = results.find(result => result.name === answers.event);
            if (flags.mail) {
                exec(
                    `echo "Hey!\n\nThanks for playing last night. We'd love to have you back in the next few months. Interested?\n\nThanks!\nJake" | /usr/local/bin/emate mailto --to "${choice?.email}" -f "jake@petescandystore.com" --subject "Thanks for playing last night!" --header "#markup: markdown"`
                );
            } else {
                await this.askForReportAndDraw(choice?.id ?? '', choice?.name as string);
            }
        } else {
            this.log('No events found');
        }
    }
}
