import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avifSrcSet = `${src.replace('.jpg', '.avif')} 1x, ${src.replace(
    '.jpg',
    '@2x.avif'
  )} 2x, ${src.replace('.jpg', '@3x.avif')} 3x`;
  const jpgSrcSet = `${src} 1x, ${src.replace(
    '.jpg',
    '@2x.jpg'
  )} 2x, ${src.replace('.jpg', '@3x.jpg')} 3x`;

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image>
          <source alt={alt} type="image/avif" srcSet={avifSrcSet} />
          <source alt={alt} type="image/jpeg" srcSet={jpgSrcSet} />
          <img alt={alt} src={src} srcSet={jpgSrcSet}></img>
        </Image>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.picture`
  display: block;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 8px;

  & img {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`;

const Tags = styled.ul`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tag = styled.li`
  padding: 4px 16px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  display: inline;
  margin-right: 8px;
`;

export default PhotoGridItem;
