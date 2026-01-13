import React from 'react';
import { WidgetProps } from '@rjsf/utils';
import DateTimeWidget from './DateTimeWidget';

export default function AltDateTimeWidget(props: WidgetProps) {
  return <DateTimeWidget {...props} />;
}
