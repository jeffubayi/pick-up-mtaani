import React, { FC } from 'react'
import Link from 'next/link'
import {Stack ,Grid } from '@mui/material'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

const courseMenu: Array<Navigation> = [
  {
    label: 'Delivery',
    path: '#',
  },
  {
    label: 'Mtaani Agents',
    path: '#',
  },
  {
    label: 'Rent A Shelf',
    path: '#',
  }
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Philadelphia House, Tom Mboya St, Nairobi', path: '#' },
  { label: '0110 151006', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Services" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
        ))}
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path="#"/>
        ))}
      </Grid> */}
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Contact" />
        {companyMenu.map(({ label, path }, index) => (
          <Stack key={index} direction="row" spacing={2}>
          {label == '0110 151006' ?  <CallIcon fontSize="small"/> : <LocationOnIcon fontSize="small"/>}
          <Link href={path} passHref>
            <MuiLink
              underline="hover"
              sx={{
                display: 'block',
                mb: 1,
                color: 'primary.contrastText',
              }}
            >
              {label}
            </MuiLink>
          </Link>
        </Stack>
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
