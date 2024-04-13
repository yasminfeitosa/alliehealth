import { Button, styled } from "@mui/material";
import useAxios from "axios-hooks";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadInput = () => {
  const [_, executePost] = useAxios(
    {
      url: `${process.env.REACT_APP_SERVER_BASE_URL}/users/bulk`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
    { manual: true }
  );

  const onSelect = (event: any) => {
    const data = new FormData();
    data.append("file", event.target.files[0]);

    executePost({ data });
  };

  return (
    <Button variant="outlined" component="label">
      Bulk User Import
      <VisuallyHiddenInput type="file" onChange={onSelect} />
    </Button>
  );
};

export default UploadInput;
