import React, { FC } from 'react'
import { Avatar, Box, Link, ListItemAvatar, ListItemText } from '@mui/material'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ py: { xs: 6, md: 10 } }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Avatar src="/images/light-logo.png" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Pickup mtaani is an online logistics platform that is trusted by online sellers and buyers since the COVID pandemic until now.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        {'Copyright © '}
        <Link color="primary" href="https://github.com/jeffubayi">
          Bazenga Digital
        </Link>{""}{' All rights reserved '}
        {'.'}
      </Typography>
    </Box>
  )
}

export default Footer
