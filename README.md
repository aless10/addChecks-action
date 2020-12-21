# Noop JavaScript Action

<p align="center">
  <a href="https://github.com/actions/javascript-action/actions"><img alt="javscript-action status" src="https://github.com/actions/javascript-action/workflows/units-test/badge.svg"></a>
</p>

## Description

This action simply adds some useless checks on your pipeline. These checks basically wait for some time and then go on.
You should see three checks since there is a PRE action, the action itself and a POST action.

## Usage

You can consume the action by referencing the v1 branch

```yaml
- name: add noop waits
  uses: aless10/addChecks-action@v1.1
```

You can add an argument called `checks` in this way
```yaml
- name: add noop waits
  uses: aless10/addChecks-action@v1.1
  with:
    checks: 3
```
which basically add more time to wait because it loops over this number (default=1)

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! :rocket:
