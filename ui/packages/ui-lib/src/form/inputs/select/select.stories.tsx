import { MenuItem, FormHelperText } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import SelectInput from './select';
import * as DocBlock from '@storybook/blocks';

type CustomArgs = React.ComponentProps<typeof SelectInput> & {
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  size?: 'small' | 'medium';
  options?: string[];
  width?: string;
};

const meta = {
  title: 'Select',
  component: SelectInput,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
    docs: {
      toc: true,
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Subtitle />
          <DocBlock.Description />
          <DocBlock.Stories />
        </>
      ),
    },
  },

  argTypes: {
    disabled: {
      type: 'boolean',
    },
    error: {
      type: 'boolean',
    },
    required: {
      type: 'boolean',
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'inline-radio' },
    },
    width: {
      type: 'string',
      defaultValue: '200px',
    },
  },

  render: function Render({
    disabled,
    error,
    required,
    size,
    options,
    width,
    ...args
  }) {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <SelectInput
          selectFieldProps={{
            error,
          }}
          formControlProps={{
            sx: { width },
            disabled,
            required,
            size,
          }}
          name={'select'}
          label={args.label}
        >
          {options?.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
        </SelectInput>
      </FormProvider>
    );
  },
} satisfies Meta<CustomArgs>;
export default meta;

type Story = StoryObj<CustomArgs>;

export const Custom: Story = {
  args: {
    label: 'Select',
    disabled: false,
    error: false,
    required: false,
    size: 'small',
    options: ['First', 'Second', 'Third'],
    width: '200px',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Select',
    size: 'small',
    options: ['First', 'Second', 'Third'],
    width: '200px',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Select',
    size: 'medium',
    options: ['First', 'Second', 'Third'],
    width: '200px',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    disabled: true,
    options: ['First', 'Second', 'Third'],
    width: '200px',
  },
};

export const Error: Story = {
  args: {
    label: 'Error Select',
    error: true,
    options: ['First', 'Second', 'Third'],
    width: '200px',
  },
};