const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

const PORT=process.env.PORT||3020
app.listen(PORT, () => {
    console.log('listen at localhost3020');
})
app.get('/', (req, res) => {
    res.render('home', { title: 'HOME page' })
})
app.get('/blog', (req, res) => {
    res.render('blog', { title: 'BLOG page' })
})
app.use((rey, res) => {
    res.render('404', { title: 'NoConnection' })
})