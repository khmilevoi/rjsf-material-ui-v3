import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ObjectFieldTemplateProps, getUiOptions } from '@rjsf/utils';

export default function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  const {
    title,
    description,
    properties,
    uiSchema,
    registry,
    idSchema,
    required,
    schema,
  } = props;
  const uiOptions = getUiOptions(uiSchema);
  const TitleFieldTemplate = registry.templates.TitleFieldTemplate;
  const DescriptionFieldTemplate = registry.templates.DescriptionFieldTemplate;
  const displayLabel = uiOptions.label !== false;
  const id = idSchema?.$id;
  const safeId = id ?? schema?.title ?? '';
  const descriptionId = id ? `${id}__description` : undefined;

  return (
    <Paper elevation={0} style={{ padding: 8 }}>
      <Grid container spacing={16}>
        {displayLabel && title && (
          <Grid item xs={12}>
            <TitleFieldTemplate
              id={safeId}
              title={title}
              required={required}
              schema={schema}
              uiSchema={uiSchema}
              registry={registry}
            />
          </Grid>
        )}
        {description && (
          <Grid item xs={12}>
            <DescriptionFieldTemplate
              id={descriptionId}
              description={description}
              schema={schema}
              uiSchema={uiSchema}
              registry={registry}
            />
          </Grid>
        )}
        {properties.map((element) => (
          <Grid item xs={12} key={element.name}>
            {element.content}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
