import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { Title } from '../typography/Title';

function AuthorItem({ name, slug, profileImage }) {
  return (
    <AuthorItemStyles className="author-item" to={slug.current}>
      <GatsbyImage
        image={profileImage.asset.gatsbyImageData}
        alt={profileImage.alt}
        className="profileImage"
      />
      <Title>{name}</Title>
    </AuthorItemStyles>
  );
}

export default AuthorItem;
