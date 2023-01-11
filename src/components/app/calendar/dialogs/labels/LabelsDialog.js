// @ts-nocheck
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { closeLabelsDialog, selectLabels, selectLabelsDialogOpen } from '../../store/labelsSlice';
import NewLabelForm from './NewLabelForm';
import LabelItemForm from './LabelItemForm';
import React from 'react';

function LabelsDialog(props) {
  // const dispatch = useDispatch();
  // const labelsDialogOpen = useSelector(selectLabelsDialogOpen);
  // const labels = useSelector(selectLabels);

  return (
    <Dialog
      classes={{
        paper: 'w-full max-w-320 p-24 md:p-40 m-24',
      }}
      // onClose={(ev) => dispatch(closeLabelsDialog())}
      open={false}
    >
      <Typography className="text-20 mb-24 font-semibold">Edit Labels</Typography>

      <List dense>
        <NewLabelForm />

        {/* {labels.map((item) => (
          <LabelItemForm label={item} key={item.id} isLast={labels.length === 1} />
        ))} */}
      </List>
    </Dialog>
  );
}

export default LabelsDialog;
