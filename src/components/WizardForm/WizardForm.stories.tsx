import type { Meta, StoryObj } from '@storybook/react';
import { WizardForm } from './WizardForm';

const meta: Meta<typeof WizardForm> = {
  component: WizardForm,
  title: 'Components/WizardForm',
};

export default meta;
type Story = StoryObj<typeof WizardForm>;

export const Default: Story = {};
