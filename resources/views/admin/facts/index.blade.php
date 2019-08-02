@extends("layouts.admin")
@section("content")
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Spread The World</h1>
        <a href="/control-panel/quick-facts/create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus fa-sm text-white-50"></i> Add New Text</a>
    </div>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Page Data</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Text English</th>
                            <th>Text Spanish</th>
                            <th>Url</th>
                            <th>Settings</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>id</th>
                            <th>Text English</th>
                            <th>Text Spanish</th>
                            <th>Url</th>
                            <th>Settings</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @foreach($data['page_data'] as $d)
                            <tr>
                                <td>{{ $d->id }}</td>
                                <td>
                                    <p>{{ $d->text_en }}</p>
                                </td>
                                <td>
                                    <p>{{ $d->text_es }}</p>
                                </td>
                                <td>
                                    <p>{{ $d->url }}</p>
                                </td>
                                <td style="display: flex; justify-content: center; vertical-align: middle">
                                    <a class="btn btn-primary" href="/{{ Request::path()."/".$d->id }}/edit"><i class="fa fa-edit"></i></a>
                                    <form action="/{{ Request::path()."/".$d->id }}" method="post" style="margin-left: 10px">
                                        @method("delete")
                                        @csrf
                                        <button class="btn btn-danger" href=""><i class="fa fa-trash"></i></button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
