import { Dialog, DialogContent, DialogTitle, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DialogBoxFull = ({
  dialogeValue,
  handleDialogeChange,
  Content,
  width,
}) => {
  const theme = useTheme();
  const themes = theme.palette;
  return (
    <Dialog
      open={dialogeValue}
      onClose={handleDialogeChange}
      sx={{ padding: "0px", width: "100vw" }}
      fullScreen
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

      <DialogContent
        sx={{
          padding: "0px",
        }}
      >
        {" "}
        <Content />
      </DialogContent>
    </Dialog>
  );
};

export default DialogBoxFull;
