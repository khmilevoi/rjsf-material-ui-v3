import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { errorId, FieldErrorProps, FormContextType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';

/** The `FieldErrorTemplate` component renders the errors local to the particular field
 *
 * @param props - The `FieldErrorProps` for the errors being rendered
 */
export default function FieldErrorTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldErrorProps<T, S, F>) {
  const { errors = [], fieldPathId } = props;
  if (errors.length === 0) {
    return null;
  }
  const id = errorId(fieldPathId);

  return (
    <List id={id} dense disablePadding>
      {errors.map((error, i: number) => {
        return (
          <ListItem key={i} disableGutters>
            <FormHelperText component="div" id={`${id}-${i}`}>
              {error}
            </FormHelperText>
          </ListItem>
        );
      })}
    </List>
  );
}
