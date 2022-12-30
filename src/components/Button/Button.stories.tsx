import { Story, Meta } from "@storybook/html"

import { Button } from "./Button"

export default {
    title: "Components/Button",
    argTypes: {
        children: {
            type: "string"
        }
    }
} as Meta

const Template : Story<Button.Props> = 
    ((args : Button.Props) => <Button {...args}/>) as Story<Button.Props>

export const BasicButton = Template.bind({})
BasicButton.args = { children: <>Test</> } as Button.Props
