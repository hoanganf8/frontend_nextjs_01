var posts = [
  {
    title: "Tiêu đề bài viết 1",
    image:
      "https://fastly.picsum.photos/id/456/500/300.jpg?hmac=FY37kCTHusIBjFtrLCP22G6ltcfcq3g3txLxZ4_Deo8",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum tempore voluptatibus placeat. Libero, aliquam magnam aspernatur architecto rem maiores! Enim nemo quisquam eligendi quaerat dolor nostrum. Aut, sint reiciendis?`,
  },
  {
    title: "Tiêu đề bài viết 2",
    image:
      "https://fastly.picsum.photos/id/456/500/300.jpg?hmac=FY37kCTHusIBjFtrLCP22G6ltcfcq3g3txLxZ4_Deo8",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum tempore voluptatibus placeat. Libero, aliquam magnam aspernatur architecto rem maiores! Enim nemo quisquam eligendi quaerat dolor nostrum. Aut, sint reiciendis?`,
  },
  {
    title: "Tiêu đề bài viết 3",
    image:
      "https://fastly.picsum.photos/id/456/500/300.jpg?hmac=FY37kCTHusIBjFtrLCP22G6ltcfcq3g3txLxZ4_Deo8",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum tempore voluptatibus placeat. Libero, aliquam magnam aspernatur architecto rem maiores! Enim nemo quisquam eligendi quaerat dolor nostrum. Aut, sint reiciendis?`,
  },
  {
    title: "Tiêu đề bài viết 4",
    image:
      "https://fastly.picsum.photos/id/456/500/300.jpg?hmac=FY37kCTHusIBjFtrLCP22G6ltcfcq3g3txLxZ4_Deo8",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum tempore voluptatibus placeat. Libero, aliquam magnam aspernatur architecto rem maiores! Enim nemo quisquam eligendi quaerat dolor nostrum. Aut, sint reiciendis?`,
  },
];

var newPosts = posts.map(function (post, index) {
  return `<div class="post-item ${index % 2 !== 0 ? "post-right" : ""}">
    <img src="${post.image}" alt="">
    <div>
      <h2>${post.title}</h2>
      <p>
        ${post.description}
      </p>
    </div>
  </div>`;
});

console.log(newPosts);

document.write(`<div class="posts">
${newPosts.join("")}
</div>
`);
