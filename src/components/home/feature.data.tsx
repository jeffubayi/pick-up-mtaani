import React, { ReactNode } from 'react'
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Home Delivery',
    description: 'Affordable shipping with Pay on Delivery',
    icon: <DeliveryDiningIcon />,
  },
  {
    title: 'Rent A Shelf',
    description: 'Manage your business for you.',
    icon: <ShoppingBagIcon />,
  },
  {
    title: 'Mtaani Agents',
    description: 'Enjoy convenient collection points.',
    icon: <AddBusinessIcon />,
  },
  {
    title: 'Track Orders',
    description: 'Track your package at anytime. ',
    icon: <TrackChangesIcon />,
  },
]
