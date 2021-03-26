axios.post('/user',{name: 'Velido', username: 'velid1'})
axios.post('/user',{name: 'Yusufo', username: 'yusuf1'})
axios.post('/user',{name: 'Zehros', username: 'zehros1'})
axios.post('/user',{name: 'Yusuf', username: 'yusufo'})
axios.post('/user',{name: 'Muhammed', username: 'mamo1'})



axios.post('/tweet/6056454a35f1831254894970',{tweet: "hadi bakim haa"})
axios.post('/tweet/6056454a35f1831254894971',{tweet: "hadi baktın haa"})

axios.post('/like/60564587ff7f0957205858b5/user/6056454a35f1831254894970')

axios.post('/like/6056459851da6b56e48a7570/dislike')
axios.post('/follow/605b7979f245c040a4a88ef8',{id: '605b79ba7a5cb14690732257'})
axios.post('/unfollow/605b7979f245c040a4a88ef8', {id: '605b79ba7a5cb14690732257'})

// delte users
axios.delete('/user/605b7979f245c040a4a88ef8')