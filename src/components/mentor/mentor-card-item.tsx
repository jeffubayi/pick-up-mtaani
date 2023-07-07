import React, { FC } from 'react'
import Image from 'next/image'
import { Box, Chip, Stack, Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: 200,
            mb: 2,
          }}
        >
          <Image src={item.photo as string} width={570} height={427} alt={'Mentor ' + item.id} />
        </Box>
        <Box >
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {item.description}
          </Typography>
          <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem />} >
            <Chip size="small" icon={<LocationOnIcon />} label={item?.company} />
            <Chip size="small" color="primary" variant={item.category === "Closed" ? "outlined" : "filled"} label={item.category} />
          </Stack>
        </Box>
      </Box>
    </Box >
  )
}
export default MentorCardItem
