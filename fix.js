const fs = require('fs');
const file = 'index.html';
if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/fabrics: 'data:image\/jpeg;base64,[^']+',/, "fabrics: 'https://placehold.co/600x400',");
    content = content.replace(/\{ id: 'casualwear'.*?\}, \/\/ data:image\/jpeg;base64,[^\r\n]+/, "{ id: 'casualwear', name: 'Casual Wear', image: 'https://placehold.co/600x400' },");
    content = content.replace(/\{ id: 'groomsmensuits'.*?\}, \/\/ data:image\/jpeg;base64,[^\r\n]+/, "{ id: 'groomsmensuits', name: 'Groomsmen Suits', image: 'https://placehold.co/600x400' },");
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed the base64 images in index.html successfully!');
} else {
    console.log('index.html not found!');
}
