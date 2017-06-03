
# app packages
npm install --save express body-parser compression morgan

# app dev-packages
npm install --save-dev typescript

# webpack packages
npm install --save-dev webpack webpack-node-externals ts-loader

# typings
cd server
typings install express --save
typings install env~node --global --save

cd ..
