import { useQuery } from '@tanstack/react-query';
import { layBinhLuan } from "../../../API/jobAPI";
import Spinning from '../../../Components/Client/Spinning/Spinning';
const Comment = ({ props }) => {
    // console.log(props);
    const { isLoading, data: listCmt = [] } = useQuery({
        queryKey: ['binh-luan/lay-binh-luan-theo-cong-viec', props],
        queryFn: () => layBinhLuan(props),
    });
    // console.log(listCmt);
    if (isLoading) {
        return <Spinning />;
    }
    return (
        <div>
            <div className="comments">
                <p style={{ fontWeight: "600", marginBottom: "10px" }}>Filters</p>
                <div className="review-header--right">
                    <span>Industry</span>
                    <p>All industries</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9l6 6l6-6" /></svg>
                </div>
                {/* <!-- layer-1 --> */}
                {listCmt.map((cmt, index) => (
                    <div key={index} className="comment-main">
                        <div className="comment-avatar">
                            {cmt.avatar.length > 0
                                ?
                                <img src={cmt.avatar} alt="123" />
                                :
                                <img src="https://picsum.photos/536/354" alt="123" />
                            }
                        </div>
                        <div className="comment-body">
                            <div className="comment-body--name">
                                <p>{cmt.tenNguoiBinhLuan}</p>
                            </div>

                            <div className="comment-body--country">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="orange" d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z" /></svg>
                                {cmt.saoBinhLuan}
                            </div>
                            <div className="comment-body--content">
                                <p>{cmt.noiDung}</p>
                            </div>
                            <div className="comment-body--time">
                                <p>{cmt.ngayBinhLuan}</p>
                            </div>
                            <div className="comment-body-action">
                                <div className="comment-body-action--btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m15 10l-.74-.123a.75.75 0 0 0 .74.873zM4 10v-.75a.75.75 0 0 0-.75.75zm16.522 2.392l.735.147zM6 20.75h11.36v-1.5H6zm12.56-11.5H15v1.5h3.56zm-2.82.873l.806-4.835l-1.48-.247l-.806 4.836zm-.92-6.873h-.214v1.5h.213zm-3.335 1.67L8.97 8.693l1.248.832l2.515-3.773zM7.93 9.25H4v1.5h3.93zM3.25 10v8h1.5v-8zm16.807 8.54l1.2-6l-1.47-.295l-1.2 6zM8.97 8.692a1.25 1.25 0 0 1-1.04.557v1.5c.92 0 1.778-.46 2.288-1.225zm7.576-3.405A1.75 1.75 0 0 0 14.82 3.25v1.5a.25.25 0 0 1 .246.291zm2.014 5.462c.79 0 1.38.722 1.226 1.495l1.471.294A2.75 2.75 0 0 0 18.56 9.25zm-1.2 10a2.75 2.75 0 0 0 2.697-2.21l-1.47-.295a1.25 1.25 0 0 1-1.227 1.005zm-2.754-17.5a3.75 3.75 0 0 0-3.12 1.67l1.247.832a2.25 2.25 0 0 1 1.873-1.002zM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75z" /><path stroke="currentColor" strokeWidth="1.5" d="M8 10v10" /></g></svg>
                                    <p>Helpful</p>
                                </div>
                                <div className="comment-body-action--btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m15 14l-.74.123a.75.75 0 0 1 .74-.873zM4 14v.75a.75.75 0 0 1-.75-.75zm16.522-2.392l.735-.147zM6 3.25h11.36v1.5H6zm12.56 11.5H15v-1.5h3.56zm-2.82-.873l.806 4.835l-1.48.247l-.806-4.836zm-.92 6.873h-.214v-1.5h.213zm-3.335-1.67L8.97 15.307l1.248-.832l2.515 3.773zM7.93 14.75H4v-1.5h3.93zM3.25 14V6h1.5v8zm16.807-8.54l1.2 6l-1.47.295l-1.2-6zM8.97 15.308a1.25 1.25 0 0 0-1.04-.557v-1.5c.92 0 1.778.46 2.288 1.225zm7.576 3.405a1.75 1.75 0 0 1-1.726 2.038v-1.5a.25.25 0 0 0 .246-.291zm2.014-5.462a1.25 1.25 0 0 0 1.226-1.495l1.471-.294a2.75 2.75 0 0 1-2.697 3.289zm-1.2-10a2.75 2.75 0 0 1 2.697 2.21l-1.47.295A1.25 1.25 0 0 0 17.36 4.75zm-2.754 17.5a3.75 3.75 0 0 1-3.12-1.67l1.247-.832a2.25 2.25 0 0 0 1.873 1.002zM6 4.75c-.69 0-1.25.56-1.25 1.25h-1.5A2.75 2.75 0 0 1 6 3.25z" /><path stroke="currentColor" strokeWidth="1.5" d="M8 14V4" /></g></svg>
                                    <p>Not helpful</p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
                {/* <!-- layer-2 --> */}
                {/* <div className="comment-main comment-layer-2">
                    <div className="comment-avatar">
                        <img src="https://picsum.photos/536/354" alt="" />
                    </div>
                    <div className="comment-body">
                        <div className="comment-body--name">
                            <p>Nguyen Van A</p>
                        </div>
                        <div className="comment-body--country">
                            United States
                        </div>
                        <div className="comment-body--content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>
                        <div className="comment-body--time">
                            <p>Published 2 days ago</p>
                        </div>
                        <div className="comment-body-action">
                            <div className="comment-body-action--btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m15 10l-.74-.123a.75.75 0 0 0 .74.873zM4 10v-.75a.75.75 0 0 0-.75.75zm16.522 2.392l.735.147zM6 20.75h11.36v-1.5H6zm12.56-11.5H15v1.5h3.56zm-2.82.873l.806-4.835l-1.48-.247l-.806 4.836zm-.92-6.873h-.214v1.5h.213zm-3.335 1.67L8.97 8.693l1.248.832l2.515-3.773zM7.93 9.25H4v1.5h3.93zM3.25 10v8h1.5v-8zm16.807 8.54l1.2-6l-1.47-.295l-1.2 6zM8.97 8.692a1.25 1.25 0 0 1-1.04.557v1.5c.92 0 1.778-.46 2.288-1.225zm7.576-3.405A1.75 1.75 0 0 0 14.82 3.25v1.5a.25.25 0 0 1 .246.291zm2.014 5.462c.79 0 1.38.722 1.226 1.495l1.471.294A2.75 2.75 0 0 0 18.56 9.25zm-1.2 10a2.75 2.75 0 0 0 2.697-2.21l-1.47-.295a1.25 1.25 0 0 1-1.227 1.005zm-2.754-17.5a3.75 3.75 0 0 0-3.12 1.67l1.247.832a2.25 2.25 0 0 1 1.873-1.002zM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75z" /><path stroke="currentColor" strokeWidth="1.5" d="M8 10v10" /></g></svg>
                                <p>Helpful</p>
                            </div>
                            <div className="comment-body-action--btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m15 14l-.74.123a.75.75 0 0 1 .74-.873zM4 14v.75a.75.75 0 0 1-.75-.75zm16.522-2.392l.735-.147zM6 3.25h11.36v1.5H6zm12.56 11.5H15v-1.5h3.56zm-2.82-.873l.806 4.835l-1.48.247l-.806-4.836zm-.92 6.873h-.214v-1.5h.213zm-3.335-1.67L8.97 15.307l1.248-.832l2.515 3.773zM7.93 14.75H4v-1.5h3.93zM3.25 14V6h1.5v8zm16.807-8.54l1.2 6l-1.47.295l-1.2-6zM8.97 15.308a1.25 1.25 0 0 0-1.04-.557v-1.5c.92 0 1.778.46 2.288 1.225zm7.576 3.405a1.75 1.75 0 0 1-1.726 2.038v-1.5a.25.25 0 0 0 .246-.291zm2.014-5.462a1.25 1.25 0 0 0 1.226-1.495l1.471-.294a2.75 2.75 0 0 1-2.697 3.289zm-1.2-10a2.75 2.75 0 0 1 2.697 2.21l-1.47.295A1.25 1.25 0 0 0 17.36 4.75zm-2.754 17.5a3.75 3.75 0 0 1-3.12-1.67l1.247-.832a2.25 2.25 0 0 0 1.873 1.002zM6 4.75c-.69 0-1.25.56-1.25 1.25h-1.5A2.75 2.75 0 0 1 6 3.25z" /><path stroke="currentColor" strokeWidth="1.5" d="M8 14V4" /></g></svg>
                                <p>Not helpful</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Comment;