import React from 'react'
import Page from './shared/Page'
import ac from './../images/ac.jpg'
// TODO Image url and description comes from Firebase !

const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus, ad soluta consectetur illo qui voluptatem. Quis soluta maiores eum. Iste modi voluptatum in repudiandae fugiat suscipit dolorum harum, porro voluptate quis? Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.';

const AirConditioning = () =>
(
    <Page title="Килиматизация" image={ac} description={description}></Page>
)

export default AirConditioning