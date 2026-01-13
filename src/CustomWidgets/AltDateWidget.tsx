import React from 'react';
import { WidgetProps } from '@rjsf/utils';
import DateWidget from './DateWidget';

export default function AltDateWidget(props: WidgetProps) {
  return <DateWidget {...props} />;
}
