import {expect, test} from '@oclif/test'

describe('yesterday', () => {
  test
  .stdout()
  .command(['yesterday'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['yesterday', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
