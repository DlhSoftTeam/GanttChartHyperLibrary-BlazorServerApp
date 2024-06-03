using Microsoft.JSInterop;

namespace BlazorServerApp
{
    public static class ChangeHandler
    {
        [JSInvokable("ItemPropertyChanged")]
        public static void ItemPropertyChanged(string itemPropertyName)
        {
            Console.WriteLine($"Change: { itemPropertyName }");
        }
    }
}
