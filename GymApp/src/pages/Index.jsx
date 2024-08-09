import { Box, Container, Stack, Typography } from '@mui/material';

const Index = () => {
    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">
                    <Stack spacing={3}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={4}
                        >
                            <Stack spacing={1}>
                                <Typography variant="h5">
                                    Bienvenido
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default Index;