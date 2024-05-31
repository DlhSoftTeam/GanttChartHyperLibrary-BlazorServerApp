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
    alert('Property ' + propertyName + ' of item ' + item.content + ' has changed.')
}