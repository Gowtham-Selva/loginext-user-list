import InputBase, { InputBaseProps } from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

export interface ICustomInputFieldProps extends InputBaseProps {
  label?: string | ReactNode;
  errormessage?: string;
  stackstyles?: { [Key: string]: string | number };
}

const CustomInputField = styled((props: ICustomInputFieldProps) => (
  <Grid container alignItems={"center"}>
    <Grid item xs={3}>
      <Typography component="span">
        <Typography component="span" color={"#C41E3A"}>
          *
        </Typography>
        &nbsp;{props.label} :
      </Typography>
    </Grid>
    <Grid xs={9}>
      <InputBase {...props} />
    </Grid>
  </Grid>
))(({ theme, error }) => ({
  "&.MuiInputBase-root": {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0.02em",
    padding: theme.spacing(1.25, 1.5),
    border: `0.25px solid #aaa`,
    borderRadius: "4px",
    "& .MuiInputBase-input": {
      padding: 0,
    },
    "& .MuiInputAdornment-root": {
      "& .MuiButtonBase-root": {
        marginRight: 1.5,
      },
    },
  },
}));

export default CustomInputField;
