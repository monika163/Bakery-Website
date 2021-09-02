import React from 'react'
import Layout from './Layout';
import MenuApi from './MenuApi';

const Home = () => {


  const [menuData, setmenuData] = React.useState(MenuApi);
  console.log(menuData);

  return (
    <div>


      <Layout menuData={menuData} />

    </div>
  )
}

export default Home
