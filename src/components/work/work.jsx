import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import './work.scss'
export default function Work() {
  return (
    <ImageList sx={{ width: 300, height: 450 }}>
      <ImageListItem key='Subheader' cols={3}>
        <ListSubheader component='div'></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading='lazy'
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  {
    id: 1,
    name: 'JavaScript Algorithm',
    img: 'https://cellphones.com.vn/sforum/wp-content/uploads/2021/09/how-to-make-a-discord-bot-7c0fe302b98b05b145682344b3a4ec59.png',
    link: 'https://github.com/Felixxitran/discordbot_cv_1.git',
  },
  {
    id: 2,
    name: 'Backend Certificates',
    img: 'https://pixewall.com/wp-content/uploads/2021/05/big-universal-4k-uhd-wallpapers.jpg',
    link: 'https://github.com/Felixxitran/pluvio_project_cv_3.git',
  },
  {
    id: 3,
    name: 'Data Analysis with Python',
    img: 'https://photo2.tinhte.vn/data/attachment-files/2021/08/5585051_Crypto.jpeg',
    link: 'https://github.com/Felixxitran/crypto_currency_table_cv_4.git',
  },
]
