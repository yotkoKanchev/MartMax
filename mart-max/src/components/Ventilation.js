import React from 'react'
import Page from './shared/Page'
import ventilation from './../images/ventilation.png'
// TODO Image url and description comes from Firebase !

const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus, ad soluta consectetur illo qui voluptatem. Quis soluta maiores eum. Iste modi voluptatum in repudiandae fugiat suscipit dolorum harum, porro voluptate quis? Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.';

const Ventilation = () =>
(
    <Page title="Вентилация" image={ventilation} description={description}></Page>
)

export default Ventilation