import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function ConfirmationDialog(props) {
  const [open, setOpen] = React.useState(false)
  const {
    isOpen,
    onOk,
    onCancel,
    okButtonContent,
    cancelButtonContent,
    content,
    title
  } = props

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={onCancel} color="primary">
            {cancelButtonContent}
          </Button>
          <Button onClick={onOk} color="primary" autoFocus>
            {okButtonContent}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
