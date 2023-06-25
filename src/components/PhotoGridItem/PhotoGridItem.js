import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avifSrcSet = `${src.replace('.jpg', '.avif')}, ${src.replace(
    '.jpg',
    '@2x.avif'
  )}, ${src.replace('.jpg', '@3x.avif')}`;
  const jpgSrcSet = `${src}, ${src.replace('.jpg', '@2x.jpg')}, ${src.replace(
    '.jpg',
    '@3x.jpg'
  )}`;

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image>
          <source type="image/avif" srcSet={avifSrcSet} />
          <source type="image/jpg" srcSet={jpgSrcSet} />
          <img alt="" src={src} srcSet={jpgSrcSet}></img>
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
  height: 300px;
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
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
