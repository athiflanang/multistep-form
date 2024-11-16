# multistep-form-vue

This is a Multistep Form made using Vue.js, Typescript, Vite, and an open-source light weight package named Formkit. This Multistep Form was made as to help guide its user step by step

## Features

- [Features](#features)
- [Installation](#installation)
- [How To Run](#how-to-run)
- [Configuration](#configuration)
- [Form Configuration](#form-configuration)

## Features

- **Multistep Form Navigation**: Easy to navigate multiple step form.
- **Made using Vue 3**: Written using Vue 3 for more modern and modular coding structure.
- **Typescript**: Written using Typescript to a more strong code and typing support.
- **Tailwind CSS**: Written using Tailwind CSS for a fast, responsive, and modular design.
- **FormKit**: Using an open source form framework made for vue for simplifying form sturcture and validation

## Installation

### Prerequisites

- Node.js
- npm

### Installing Steps

1. Clone the repository

```sh
git clone https://github.com/athiflanang/multistep-form.git
cd multistep-form-vue
```

2. Install dependencies

```sh
npm i / npm install
```

## How To Run

1. Enter this command to the terminal in your favoured IDE platform (Visual Studio Codee)

```sh
npm run dev
```

2. Open the project in your browser

```sh
http://localhost:5173/
```

## Configuration

### Typescript

This project was written using Typescript to help typing support and type checking, this configuration can be accessed in `src/main.ts`

### Tailwind CSS

Tailwind CSS was used to help a modular and responsive design, this configuration can be accessed in `tailwind.config.js`

### Vite

This project was bundled using Vite which can help with hot module replacement, this configuration can be accessed in `vite.config.ts`

### FormKit

This project was made using a open source light weight package to help generate, validate, an error handling, this configuration can be accessed in `formkit.config.ts`

## Form Configuration

This Multistep Form follows the step and field in the following JSON structure:

```
[
  {
    "step": 1,
    "title": "Personal Information",
    "description": "Please fill out your personal information",
    "fields": [
      {
        "type": "textfield",
        "label": "Name",
        "placeholder": "Enter your name",
        "required": true
      },
      {
        "type": "radio",
        "label": "Gender",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          },
          {
            "label": "Other",
            "value": "other"
          }
        ],
        "required": true
      }
    ]
  },
  {
    "step": 2,
    "title": "Additional Information",
    "description": "Please provide additional details",
    "fields": [
      {
        "type": "textarea",
        "label": "Description",
        "placeholder": "Enter a description",
        "required": false
      },
      {
        "type": "autocomplete",
        "label": "Title",
        "placeholder": "Enter a title",
        "options": [
          "Mr.",
          "Mrs.",
          "Ms.",
          "Dr.",
          "Prof."
        ],
        "required": true
      }
    ]
  }
]
```
