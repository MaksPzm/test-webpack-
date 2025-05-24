import "./script/script";
import "./scss/main.scss";
function requireAll(r) { r.keys().forEach(r); } // функция для добавления всех картинок в webpack
requireAll(require.context('/images/png', true));
requireAll(require.context('/images/svg', true));