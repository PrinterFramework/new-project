# Just Print It, Project Template

If you want to start developing with Printer. Head over to the [Workstation](https://workstation.justprintit.ai).

If you are new to Printer review the docs [Printer Documentation](https://justprintit.ai/docs).

You should fork, clone or copy this template to start a new project. The Printer Workstation will work with a different project structure and style. However, Printer works best using a structure similar to this template.

## Overview

I recommend using [bun.sh](https://bun.sh/) for commands. Here's a quick overview of features.

```bash
# Start the next dev server on port 4200
bun run dev

# Build the next bundle in `.next`
bun run build

# Start the next production server
bun run start

# Lint and fix style issues
bun run lint

# Lint the typescript and autofix any issue if possible
bun run lint:node --fix

# Lint the SCSS and autifix any issue if possible
bun run lint:style --fix

# Generate the prisma client
bun run prisma

# Generate the prisma client and push changes
bun run prisma:update
```

## Printer Legacy

Note that the new project template has been overhauled since Printer. If you want to view the legacy v1 and v2 versions of the new project template. Take a look at the following commit checkpoints:

[Printer V2 - v2.2.5](https://github.com/PrinterFramework/new-project/tree/f8cf4283a71c0d46ba7f44728f300c9c63592a12)

[Printer V1 - v1.30](https://github.com/PrinterFramework/new-project/tree/1bca5ac2c171eeb625ca12374437a295b8310b48)

You can also view the legacy websites too:

[Printer V2 - Website](https://prntr.click)

[Printer V1 - Website](https://v1.prntr.click)
