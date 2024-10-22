// src/components/Noticia.jsx
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import Box from '@mui/material/Box'; // Importa Box para el diseño

const Noticia = ({ noticia }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(noticia.likes);
  const [open, setOpen] = useState(false);

  const handleLike = () => {
    setLiked(prev => !prev);
    setLikes(prev => (liked ? prev - 1 : prev + 1));
  };

  const handleShare = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleWhatsAppShare = () => {
    console.log("Enviando por WhatsApp ...");
    handleClose();
  };

  const handleTelegramShare = () => {
    console.log("Enviando por Telegram ...");
    handleClose();
  };

  return (
    <>
      <Card className="noticia-card" sx={{ width: '100%', marginBottom: '1rem' }}>
        <CardHeader
          avatar={<Avatar src={noticia.avatar} alt={`Avatar de ${noticia.titulo}`} />}
          title={noticia.titulo}
          subheader={noticia.fecha}
        />
        <CardMedia
          component="img"
          height="194"
          image={noticia.imagen}
          alt={`Imagen de ${noticia.titulo}`}
          style={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {noticia.descripcion}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleLike} aria-label="add to favorites">
            {liked ? <FavoriteIcon sx={{ color: 'blue' }} /> : <FavoriteBorderIcon sx={{ color: 'blue' }} />}
          </IconButton>
          <Typography>{likes}</Typography>
          <IconButton onClick={handleShare} disabled={!liked}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      {/* Diálogo modal para compartir */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">Compartir Noticia</Typography>
          <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
           ¿A través de qué plataforma quieres compartir?
          </Typography>
          <Button onClick={handleWhatsAppShare} variant="contained" color="primary" sx={{ margin: '5px' }}>
            <WhatsAppIcon /> 
          </Button>
          <Button onClick={handleTelegramShare} variant="contained" color="primary" sx={{ margin: '5px' }}>
            <TelegramIcon /> 
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Noticia;
