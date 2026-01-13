import React from 'react';

type SpacingValue = number | string | undefined;

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  p?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  padding?: SpacingValue;
  paddingTop?: SpacingValue;
  paddingRight?: SpacingValue;
  paddingBottom?: SpacingValue;
  paddingLeft?: SpacingValue;
  margin?: SpacingValue;
  marginTop?: SpacingValue;
  marginRight?: SpacingValue;
  marginBottom?: SpacingValue;
  marginLeft?: SpacingValue;
};

const toSpacing = (value?: SpacingValue) => {
  if (typeof value === 'number') {
    return value * 8;
  }
  return value;
};

export default function Box(props: BoxProps) {
  const {
    p,
    pt,
    pr,
    pb,
    pl,
    m,
    mt,
    mr,
    mb,
    ml,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    style,
    ...rest
  } = props;
  const boxStyle: React.CSSProperties = {
    padding: toSpacing(padding ?? p),
    paddingTop: toSpacing(paddingTop ?? pt),
    paddingRight: toSpacing(paddingRight ?? pr),
    paddingBottom: toSpacing(paddingBottom ?? pb),
    paddingLeft: toSpacing(paddingLeft ?? pl),
    margin: toSpacing(margin ?? m),
    marginTop: toSpacing(marginTop ?? mt),
    marginRight: toSpacing(marginRight ?? mr),
    marginBottom: toSpacing(marginBottom ?? mb),
    marginLeft: toSpacing(marginLeft ?? ml),
    ...style,
  };

  return <div style={boxStyle} {...rest} />;
}
