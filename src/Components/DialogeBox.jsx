import { Dialog, DialogContent, DialogTitle, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DialogBox = ({ dialogeValue, handleDialogeChange, Content, width }) => {
  const theme = useTheme();
  const themes = theme.palette;
  return (
    <Dialog
      open={dialogeValue}
      onClose={handleDialogeChange}
      // sx={{ mt: "10px" }}
      maxWidth={false}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // pt: "20px",
          color: themes.black.main,
        }}
      >
        <CloseIcon
          onClick={handleDialogeChange}
          sx={{
            marginLeft: "auto",
            float: "right",
            cursor: "pointer",
            color: themes.myblack.main,
          }}
        />
      </DialogTitle>

      <DialogContent>
        {" "}
        <Content />
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
