import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from 'dayjs';
import { Link } from "react-router-dom";
import { User } from "../../types/User";
import { useUserContext } from "../../contexts/userContext";

const TableHeaderCell = (props: Record<any, any>) => (
  <TableCell
    sx={{
      fontWeight: "bold",
    }}
    {...props}
  />
);

type Props = {
  users: User[];
};


const UsersTable = ({ users }: Props) => {
  const { setUser } = useUserContext();

  const handleLinkOnClick = (user: User) => {
    setUser(user);
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell align="right">Birthdate</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={'/details'} onClick={() => handleLinkOnClick(user)}>
                  {`${user.first_name} ${user.last_name}`}
                </Link>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell align="right">{user.birthdate ? dayjs(user.birthdate).format('MM/DD/YYYY') : 'Not informed'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;
