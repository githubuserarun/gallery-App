const ThumbnailItem = props => {
  const {details, clickTabItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : 'thumbnail'
  return (
    <li className="tab-item-container">
      <button className="tab-btn" type="button" onClick={onClickTabItem}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeTabBtnClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
