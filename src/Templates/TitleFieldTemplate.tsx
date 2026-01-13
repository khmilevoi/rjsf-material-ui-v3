import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormContextType, TitleFieldProps, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';

/** The `TitleField` is the template to use to render the title of a field
 *
 * @param props - The `TitleFieldProps` for this component
 */
export default function TitleFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({ id, title, optionalDataControl }: TitleFieldProps<T, S, F>) {
  let heading = <Typography variant="h5">{title}</Typography>;
  if (optionalDataControl) {
    heading = (
      <Grid container spacing={0} alignItems="center">
        <Grid item xs>
          {heading}
        </Grid>
        <Grid item style={{ textAlign: 'right' }}>
          {optionalDataControl}
        </Grid>
      </Grid>
    );
  }
  return (
    <Box id={id} mb={1} mt={1}>
      {heading}
      <Divider />
    </Box>
  );
}
