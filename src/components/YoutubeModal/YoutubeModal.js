// @flow strict
import React from 'react';
import styles from './YoutubeModal.module.scss';

type Props = {
  video: any
};

const YoutubeModal = ({ video }: Props) => {
  const { video } = props;

    return (
      <ConditionalLayout>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={metaImageUrl} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={metaImageUrl} />
        </Helmet>
        <ResponsiveReactPlayer
          url={video.url}
          title={video.title}
          topics={video.tags}
          key={video.url}
        />
      </ConditionalLayout>
    );
  }
}

export default YoutubeModal;
