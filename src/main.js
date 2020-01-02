//入口文件
console.log('ok');

import $ from 'jquery'

//使用import导入css样式表
//webpack默认值打包处理js类型文件，无法处理非js的文件，
//如果要处理这类文件，需另外安装第三方loader加载器
import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

