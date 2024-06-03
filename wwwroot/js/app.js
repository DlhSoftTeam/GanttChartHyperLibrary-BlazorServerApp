var ganttChartView;
window.interop = {
    initialize: () => {
        ganttChartView = document.getElementById("ganttChartView");
        DlhSoft.Controls.GanttChartView.initialize(ganttChartView,
            [{ content: 'Item 1' }, { content: 'Item 2' }],
            { itemPropertyChangeHandler: itemPropertyChanged });
    },
    addItem: (item) => {
        ganttChartView.addItem(item);
    }
};
function itemPropertyChanged(item, propertyName, isDirect, isFinal) {
    if (!isDirect || !isFinal || propertyName == 'isSelected')
        return;
    DotNet.invokeMethodAsync('BlazorServerApp', 'ItemPropertyChanged', item.content + '.' + propertyName + '=' + item[propertyName]);
}