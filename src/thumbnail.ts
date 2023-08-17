export const returnThumbnailOfVideo =  (url:String) => {
    const videoUrl  = url.split('/')[4]
    return `https://i.ytimg.com/vi/${videoUrl}/sddefault.jpg`
  }