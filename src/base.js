import Rebase from 're-base';
import firebaseApp from './firebaseApp';

const base = Rebase.createClass(firebaseApp.database());

export default base;