import styled from "styled-components";

export const GalleryContainer = styled.div`
  width:100%;
  display: grid;
  place-items: center;
`

export const Gallery = styled.div`

  display: flex;
  width: 73.75rem;
  height: 30rem;

  img {
    min-width: 0;
    flex: 1 1 10px;
    object-fit: cover;
    opacity: 0.7;
    transition: 0.5s;

    &:hover {
    flex: 1 1 480px;
    opacity: 1;
  }
}
`