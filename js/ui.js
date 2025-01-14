document.addEventListener("DOMContentLoaded", () => {
    // ProjectList nesnesini oluştur ve projeleri ekle
    const projectList = new ProjectList("items");
    projectList.addProject(project1);
    projectList.addProject(project2);
    projectList.addProject(project3);
    projectList.addProject(project4);
    projectList.addProject(project5);
    projectList.addProject(project6);

    // Projeleri render et
    projectList.render();
});
