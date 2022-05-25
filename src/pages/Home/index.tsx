import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from "@mui/material";
import {
  findPokemons,
  PokemonListItemResponse,
  PokemonListResponse
} from "../../services/Pokemon";

interface Column {
  id: 'url' | 'name' | 'details';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'url', label: 'Identificador', minWidth: 10 },
  { id: 'name', label: 'Nome', minWidth: 70 },
  { id: 'details', label: 'Ação', minWidth: 20 },
];

interface Data {
  name: string;
  url: string;
}

function createData(
  name: string,
  url: string,
): Data {
  return { name, url };
}

const Home: React.FC = () => {

  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [pokemons, setPokemons] = useState<PokemonListItemResponse[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {

    const find = async () => {
      const request = {
        offset: page,
        limit: 50
      }
      const pokemonsResponse = await findPokemons(request);
      setPokemons(pokemonsResponse.results);
      setCount(pokemonsResponse.count);
    };

    find();
  }, [page]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ backgroundColor: "#FFD700", minHeight: "100vh" }}>
      <Container>
        <Card>
          <Grid container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={{ p: "2rem" }}
          >
            <Grid item textAlign="center" xs={12}>
              <Typography variant="h1">Vamos caçar pokemons?</Typography>
            </Grid>

            {/* <Grid container
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              sx={{ p: "2rem 1rem" }}
            >
              <Grid item xs={8}>
                <TextField fullWidth label="Digite aqui o nome do pokemon ou o ID dele e pesquise" id="fullWidth" />
              </Grid>
              <Grid item textAlign="left" xs={1}>
                <Button>
                  <SearchIcon fontSize="large" style={{ color: "black" }} />
                </Button>
              </Grid>
            </Grid> */}

            <Grid item xs={12} sx={{ pt: "2rem" }}>
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {pokemons
                        .map((row) =>
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.url}>
                            <TableCell>{row.url}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>
                              <Button onClick={() => {
                                navigate('../descricao', {
                                  replace: true,
                                  state: {
                                    url: row.url
                                  },
                                })
                              }}>
                                Ver detalhes
                              </Button>
                            </TableCell>
                          </TableRow>
                        )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[100]}
                  component="div"
                  count={count}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div >
  );
};

export default Home;
