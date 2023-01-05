import React from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components';
import { Stack } from "@strapi/design-system/Stack";
// import { Typography } from '@strapi/design-system/Typography';
// import { Flex } from '@strapi/design-system/Flex';
// import { Box } from '@strapi/design-system/Box';
// import { FocusTrap } from '@strapi/design-system/FocusTrap';
import {
  Field,
  FieldHint,
  FieldError,
  FieldLabel,
  // FieldInput,
} from "@strapi/design-system/Field";
import { Select, Option } from "@strapi/design-system";
// import CarretDown from "@strapi/icons/CarretDown";
import { useIntl } from "react-intl";

// import getTrad from "../../../utils/getTrad";
import province from "./province.json";

const ChinaProvincePicker = ({
  attribute,
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  required,
  value,
}) => {

  const { formatMessage } = useIntl();

  const handleChange = (v) => {
    onChange({
      target: {
        name,
        value: v,
      }
    })
  }

  return (
    <Field
      name={name}
      id={name}
      // GenericInput calls formatMessage and returns a string for the error
      error={error}
      hint={description && formatMessage(description)}
      // required={required}
    >
      <Stack spacing={1}>
        <FieldLabel action={labelAction}>{formatMessage(intlLabel)}</FieldLabel>
        <Select value={value} onChange={handleChange} disabled={disabled} required={required}>
          {province.map((i) => (
            <Option key={i.name} value={i.name}>
              {i.name}
            </Option>
          ))}
        </Select>
        <FieldHint />
        <FieldError />
      </Stack>
    </Field>
  );
};

ChinaProvincePicker.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: "",
};

ChinaProvincePicker.propTypes = {
  intlLabel: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  attribute: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  labelAction: PropTypes.object,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default ChinaProvincePicker;
